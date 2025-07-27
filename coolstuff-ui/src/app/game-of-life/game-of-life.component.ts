import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-game-of-life",
  templateUrl: "./game-of-life.component.html",
  styleUrls: ["./game-of-life.component.css"],
  standalone: true,
})
export class GameOfLifeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("canvas", { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private resolution = 10;
  private grid!: number[][];
  private cols!: number;
  private rows!: number;
  private intervalId: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d")!;
    this.canvas.nativeElement.width = 300;
    this.canvas.nativeElement.height = 300;
    this.cols = this.canvas.nativeElement.width / this.resolution;
    this.rows = this.canvas.nativeElement.height / this.resolution;
    this.grid = this.buildGrid();
    this.render();
    this.intervalId = setInterval(() => this.update(), 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private buildGrid(): number[][] {
    return new Array(this.cols)
      .fill(null)
      .map(() =>
        new Array(this.rows).fill(null).map(() => Math.floor(Math.random() * 2))
      );
  }

  private update(): void {
    this.grid = this.nextGen(this.grid);
    this.render();

    // Check if the grid is static or empty
    if (this.isGridStatic() || this.isGridEmpty()) {
      this.grid = this.buildGrid();
    }
  }

  private isGridStatic(): boolean {
    const nextGrid = this.nextGen(this.grid);
    return JSON.stringify(this.grid) === JSON.stringify(nextGrid);
  }

  private isGridEmpty(): boolean {
    return this.grid.every((row) => row.every((cell) => cell === 0));
  }

  private nextGen(grid: number[][]): number[][] {
    const nextGen = grid.map((arr) => [...arr]);

    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid[col].length; row++) {
        const cell = grid[col][row];
        let numNeighbours = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
              continue;
            }
            const x_cell = col + i;
            const y_cell = row + j;

            if (
              x_cell >= 0 &&
              y_cell >= 0 &&
              x_cell < this.cols &&
              y_cell < this.rows
            ) {
              const currentNeighbour = grid[col + i][row + j];
              numNeighbours += currentNeighbour;
            }
          }
        }

        // Rules
        if (cell === 1 && numNeighbours < 2) {
          nextGen[col][row] = 0;
        } else if (cell === 1 && numNeighbours > 3) {
          nextGen[col][row] = 0;
        } else if (cell === 0 && numNeighbours === 3) {
          nextGen[col][row] = 1;
        }
      }
    }
    return nextGen;
  }

  private render(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    for (let col = 0; col < this.grid.length; col++) {
      for (let row = 0; row < this.grid[col].length; row++) {
        const cell = this.grid[col][row];

        this.ctx.beginPath();
        this.ctx.rect(
          col * this.resolution,
          row * this.resolution,
          this.resolution,
          this.resolution
        );
        this.ctx.fillStyle = cell ? "black" : "white";
        this.ctx.fill();
        this.ctx.stroke();
      }
    }
  }
}

Leveraging AWS Glacier for Secure Photo and Video Backup

The average smartphone user's camera roll has roughly 2795 photos; adding videos increases the memory footprint further. My OnePlus 11 takes high res photos which use up to 10 MB of space on avg per photo A 30 second video at 4K 60 fps consumes 220 MB.

Google One Membership charges- 130 INR / Month for 100 GB.
ICloud charges - 219 INR/ Month for 200 GB.

As these options are not viable for most of the heavy users, I usually backup photos from my devices to external hard drives. My hard drives are single point of failures if I ever drop any one of my hard drive then say good bye to those cherished memories and captured moments.

It's not like we all need access to our videos or family trip photos everyday, but we'd like to be able access them whenever we want to without denting our pocket or fearing a hard drive failure.

Cheaper and secure alternative for backing up photos: Enter AWS glacier
AWS Glacier Storage - 299 INR/ Month for 1000 GB (1 TB - US_EAST_1)

![AWS Glacier](./assets/images/aws-glacier-backup/main.png)

Here are the steps through which you can leverage AWS glacier for your long term photo and video backup
-> Download and Install 7Zip. Create an archive MyPhotos.7z, encrypt the archive with a password (AES-256) .
Note: Save this password, else you will not be able to unzip your archive.
-> Sign up for an AWS account and create an Administrator User ( GUIDE ).
-> Create a Vault in S3 Glacier
-> Upload the Archive to the vault.
-> When needed you can download the archive from the vault.

Steps with CLI:
Creating a Vault

1. List Vaults in Current Location and pick a unique name
   aws glacier list-vaults --account-id -
2. Create a Vault
   aws glacier create-vault --account-id - --vault-name YourVaultName

Uploading to an Archive

1. Encrypt the file
   7z a -t7z -mhe=on -pYourPassword archive.7z /folder/to/compress
2. Upload the encrypted archive to previously created vault.
   aws glacier upload-archive --vault-name YourVaultName --account-id - --body
   archive.7z

Downloading File from Glacier
To download from vault we need the archiveIds, which were generated at the time of upload. If you have them in hand use the archiveId for download and skip InventoryRetrieval Job.

1. Initiating inventory retrieval, lists all the archives in the vault
   aws glacier initiate-job --vault-name YourVaultName --account-id - --job-parameters="{\"Type\":\"inventory-retrieval\"}"
2. Check the status of inventory-retrieval job, this will take a while for completion.
   aws glacier describe-job --vault-name YourVaultName --account-id - --job-id "jobId"
3. Get the list of archives in vault after completion of inventory-retrieval job.
   aws glacier get-job-output --vault-name YourVaultName --account-id - --job-id "jobId" myArchives.json
4. Initiate archive-retrieval. We have bulk, standard, expedited retrievals at our disposable each with increasing cost and decreasing time of archive file availability. On US_EAST_1 the retrieval pricing charges are $0.00, $0.01, $0.03 per GB respectively.
   aws glacier initiate-job --vault-name YourVaultName --account-id - --job-parameters="{\"Type\":\"archive-retrieval\",\"ArchiveId\":\"archiveId\",\"Tier\":\"Expedited\",\"Description\":\"Expedited retrieval\"}"
5. Check for the status Expedited archive-retrieval job

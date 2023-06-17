import os

#strip image metadata
#os.system('exiftool -All= -overwrite_original -ext jpg -ext jpeg -ext png -ext gif . -r')

#sync with s3 bucket
os.system('aws s3 sync . s3://hunterirving.com/hacksburg_dot_org  --exclude ".git/*" --exclude ".gitignore" --exclude "*.DS_Store" --exclude "*.CS_Store" --exclude "pushall.py"')

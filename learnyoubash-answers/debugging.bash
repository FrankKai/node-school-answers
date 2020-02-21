# for item in $*; do 
#     touch $item 
# done

set -vn
echo $@
touch $@
mkdir ./folder
mv file* ./folder
cd ./folder
ls
set +vn
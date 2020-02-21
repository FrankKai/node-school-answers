for (( i=$1; i<$2; i++ )); do
    if [[ $(($i % 2)) == 1 ]]; then continue; fi
    echo $i;
done
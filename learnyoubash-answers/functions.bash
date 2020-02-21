odd () {
    indent=1
    for (( i=$1; i<$2; i++ )); do
        if [[ $(($i % 2)) == 1 ]]; then continue; fi
        for (( n=0; n<$indent; n++ )); do 
            echo -n ' ' 
        done
        echo $i
        ((indent++))
    done
}

main () {
    echo $FUNCNAME
    odd $1 $2
}

main $1 $2

# for i in {1..100}; do echo -n =; done   
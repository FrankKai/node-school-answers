result="It is ${1}."

case "$1" in  
    (jpeg|jpg)  
        echo "It is jpeg."
        ;;  
    (png)  
        echo $result
        ;;  
    (gif)  
        echo $result
    ;;  
    (*)  
        echo "$1 is not an image!"  
    ;;  
esac  
function generateChessBoard(size){

    let result = '';


    for(let i=0; i<size; i++){


        if(i%2==0){
            for(let i=0; i<size;i++ ){

                if(i%2==0)
                    result+=' ';
                else
                    result+='#';
            }
            result+='\n';
        }

        else{

             for(let i=0; i<size;i++ ){

                if(i%2==0)
                    result+='#';
                else
                    result+=' ';
            }
            result+='\n';

        }
    }

    return result;
}


console.log(generateChessBoard(50));
let matrice = [
    [">", "-", "-", "-", "A", "-", "@", "-", "+"],
    ["", "", "", "", "", "", "", "", "|"],
    ["+", "-", "U", "-", "+", "", "", "C"],
    ["|", "", "", "", "|", "", "", "", "|"],
    ["s", "", "", "", "C", "-", "-", "-", "+"]
]
var path = ""
var letters = ""
const regex = /[A-Z]/;
for(let i = 0; i < matrice.length;i++){
    for(let j = 0; j < matrice.length;j++){
        if(regex.test(matrice[i][j])){
            letters += matrice[i][j]
        }
        if(matrice[i][j] == '>'){
            path += matrice[i][j+1]
        }
        else if(matrice[i][j] == '|'){
            if(matrice[i+1][j].length == 0){
                path += matrice[i-1][j]
            }
            else{
                path += matrice[i+1][j];
            }
        }
        else if(matrice[i][j] == '-'){
            if(matrice[i][j-1].length == 0){
                path += matrice[i][j+1]
            }
            else{
                path += matrice[i][j-1]
            }
        }
        
        else if(matrice[i][j] == '+'){
            if((matrice[i+1][j].length == 0) && (matrice[i][j+1].length == 0) && (matrice[i][j-1].length == 0)){
                path += matrice[i- 1][j]
            }
            else if((matrice[i-1][j].length == 0) && (matrice[i][j+1].length == 0) && (matrice[i][j-1].length == 0) ){
                path += matrice[i+1][j]
            }
            else if((matrice[i][i+1].length == 0) && (matrice[i-1][j].length == 0) && (matrice[i][j+1].length == 0)){
                path += matrice[i][j-1]
            }
            else{
                path += matrice[i][j+1]
            }
        }
    }
}
console.log(letters)
console.log(path)
/*
I know that this solution is not right but I tried to solve it without using ChatGPT or stackoverflow.
*/
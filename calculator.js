var dot=false;
function cals(V)
{if(V=='C')
document.getElementById('result').value='0';
else if(document.getElementById('result').value=='0')
document.getElementById('result').value=V;
else if(V=='.')
{ if(dot==false)
    {
        dot=true;
        document.getElementById('result').value+=V;
    }
}
else if(V=='+'||V=='-'||V=='*'||V=='/')
{dot=false;
    document.getElementById('result').value+=V;
}
else 
document.getElementById('result').value+=V;
}
function cal(equation)
{
    var answer=eval(equation);
    document.getElementById('result').value=answer;
}

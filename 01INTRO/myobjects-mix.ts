type CarNumber ={
    cardnumber:string
}

type CardDate={
    carddate:string
}

type CardDetails= CarNumber & CardDate &{
    cvv:number
}

export{}
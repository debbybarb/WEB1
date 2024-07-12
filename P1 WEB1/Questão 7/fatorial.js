function fatorialRecursivo(x) {
    if (x==0) {
        return 1;
    } else{
        return x*fatorialRecursivo(x-1);
    }
}
function aTest(str1, str2){
    str1[0] = str2[0];
    str2[0] = str1[0];
    console.log(str1, str2);

}
aTest("Monkey", "Business");
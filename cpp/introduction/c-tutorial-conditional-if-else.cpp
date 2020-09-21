#include <bits/stdc++.h>

using namespace std;

int main() {
    string nums[]={"zero","one","two","three","four","five","six","seven","eight","nine"};

    int n;
    cin >> n;
    if(n > 9){
        cout << "Greater than 9";
    }
    else{
        cout << nums[n];
    }
    
    return 0;
}

#include<bits/stdc++.h>
using namespace std;



int main(){
int size_of_array;
cin>>size_of_array;

vector<int> array;
for(int i=0;i<size_of_array;i++){
  int data;
  cin>>data;
  array.push_back(data);
}


// first method  ---------------------------------------------------

int sum = ((size_of_array+1)*(size_of_array+2))/2;

int sum_of_array = 0;
for(int i=0;i<size_of_array;i++){
  sum_of_array+=array[i];
}

cout<<(sum-sum_of_array)<<" ";



// Second  method  ------------------------------------------------

// int index_xor = 1;
// int array_xor = array[0];
//
// for(int i=2;i<=size_of_array+1;i++){
//   index_xor^=i;
// }
//
// for(int i=1;i<size_of_array;i++){
//   array_xor^=array[i];
// }
//
// int ans = array_xor^index_xor;
//
// cout<<ans<<" ";


return 0;

}

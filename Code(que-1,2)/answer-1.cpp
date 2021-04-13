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

for(int i=0;i<size_of_array;i++){

	array[array[i]%size_of_array] = array[array[i]%size_of_array] + size_of_array;
}

for(int i=0;i<size_of_array;i++){
  if(array[i] >= size_of_array*2)
	cout<<i<<" ";
}


return 0;

}

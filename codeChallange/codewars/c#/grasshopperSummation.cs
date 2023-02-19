using System;
// starting at 1 up to num
// while loop the adds up while i is lesss then or equal num
public static class Kata 
{
    public static int summation(int num)
    {
      int count = 0;
      for (int i = 0; i <= num; i++) 
      {
        count = count + i;
      }
      return count;
    }
}
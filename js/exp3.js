import java.util.*;
class HelloWorld
{
    public static void main(String[] args)
    {
        int[] random = {1,3,6,5,2,0,10};
        System.out.println("Array before sorting : " + Arrays.toString(random));
        Arrays.sort(random);
        System.out.println("Array after sorting in ascending order : " + Arrays.toString(random));

    }
}

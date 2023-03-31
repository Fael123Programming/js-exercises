public class StackSize {
    public static void main(String[] args) {
        System.out.println(getMaxCallStackSize(0));
    }

    private static int getMaxCallStackSize(int i) {
        try {
            return getMaxCallStackSize(++i);
        } catch (StackOverflowError e) {
            return i;
        }
    }
}

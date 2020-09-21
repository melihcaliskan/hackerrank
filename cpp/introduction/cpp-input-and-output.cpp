#include <iostream>

int main() {
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        int input;
        std::cin >> input;
        sum += input;
    }
    std::cout << sum << std::endl;
    return 0;
}

#include <iostream>
#include <iomanip>

int main() {
    int a;
    long b;
    char c;
    float d;
    double e;
    std::cin >> a >> b >> c >> d >> e;
    std::cout << a << "\n" << b << "\n" << c << "\n";
    std::cout << std::fixed << std::setprecision(3) << d << "\n";
    std::cout << std::fixed << std::setprecision(9) << e << "\n";
    return 0;
}
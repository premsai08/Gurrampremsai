import re
import ast

with open('index.html', 'r', encoding='utf8') as f:
    text = f.read()

m = re.search(r'<script type="module">(.*)</script>', text, re.S)
if not m:
    print('NO_SCRIPT')
    raise SystemExit(1)
code = m.group(1)

# Replace HTML entities and keep raw script
try:
    ast.parse(code)
    print('AST_OK')
except Exception as e:
    print('AST_ERR')
    print(e)
    # Show a snippet around the line if possible
    if hasattr(e, 'lineno'):
        lines = code.splitlines()
        ln = e.lineno
        start = max(0, ln-3)
        end = min(len(lines), ln+2)
        for i in range(start, end):
            print(f'{i+1}: {lines[i]}')

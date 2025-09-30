# Difference between `.catch()` and `app.on("error")`

## 1. `.catch()` after `connectDB()`
- **Purpose:** Catches MongoDB connection errors.  
- **Triggered when:** Database URI is invalid, server is down, authentication fails, etc.  

### Example:
```bash
MONGO db connection failed !!! MongooseServerSelectionError: connect ECONNREFUSED
```

## 2. `app.on("error")`

- **Purpose:** Handles Express server-level errors.  
- **Triggered when:** `app.listen()` fails (e.g., port already in use, insufficient privileges).  

### Example:
```bash
ERROR:  Error: listen EADDRINUSE: address already in use :::8000
```


# Express Middleware Usages

## 1. `app.use(express.json({ limit: "16kb" }))`
- **Purpose:** Parses incoming requests with JSON payloads.  
- **Use Case:** When a client sends data in JSON format (like in a `POST` request).  
- **Option `limit`:** Restricts the maximum JSON payload size (here 16 KB) to prevent large/unexpected payloads (a basic security measure).

---

## 2. `app.use(express.urlencoded({ extended: true, limit: "16kb" }))`
- **Purpose:** Parses incoming requests with URL-encoded data (form submissions).  
- **Use Case:** Handles HTML form submissions (`application/x-www-form-urlencoded`).  
- **Option `extended: true`:** Allows parsing of nested objects using the `qs` library instead of the simple querystring library.  
- **Option `limit`:** Restricts payload size to 16 KB.

---

## 3. `app.use(express.static("public"))`
- **Purpose:** Serves static files from the `public` folder.  
- **Use Case:** Makes assets like images, CSS, JavaScript files available at the root URL.  
- **Example:**  
  If `public/logo.png` exists, it can be accessed via `http://localhost:8000/logo.png`.


# Higher-Order Functions in JavaScript

## 📌 Definition
A **higher-order function (HOF)** is a function that either:
1. **Takes one or more functions as arguments** (callback functions), OR  
2. **Returns a function as its result**.  

In short, functions that operate on other functions.

---

## ✅ Why are they useful?
- Promote **code reusability**  
- Enable **functional programming** concepts  
- Make code **cleaner and more concise**  

---

## 📝 Examples

### 1. Function as an Argument
```javascript
function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = "Babita";
  return callback(name); // passing function as argument
}

console.log(processUserInput(greet)); 
// Output: Hello Babita
```
## 2. Function Returning Another Function
A higher-order function can **return another function**.  
This is often used with **closures** where the inner function remembers variables from the outer function.

### Example:
```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;  // inner function uses outer scope
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15
```


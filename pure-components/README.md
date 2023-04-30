# About

## Objective
Avoid Unnecessary re-render of components.

## Pure Components:
<table>
  <tr>
    <td>Regular Components</td>
    <td>Pure Components</td>
  </tr>
  <tr>
    <td>A regular component does not implement the shouldComponentUpdate method. It always returns true by default.</td>
    <td>A pure component implements shouldComponentUpdate method with a shallow props and state comparison.</td>
  </tr>
</table>

### Shallow Comparison:

```javascript 
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
const obj3 = { name: 'Jane', age: 25 };

console.log(obj1 === obj2); // false - they are different objects
console.log(obj1 == obj2); // false - they are different objects
console.log(obj1 === obj3); // false - they have different property values
console.log(obj1 == obj3); // false - they have different property values

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true - shallow comparison
console.log(JSON.stringify(obj1) === JSON.stringify(obj3)); // false - shallow comparison

```

In this example, we create three objects with the same properties and values. However, when we compare them using the strict equality operator === or the loose equality operator ==, they are considered different objects, and the comparison returns false.

To perform a shallow comparison and check if the objects have the same properties and values, we can use the JSON.stringify() method to convert the objects into JSON strings, and then compare the strings using the strict equality operator ===. In this case, the comparison returns true for obj1 and obj2, because they have the same properties and values, but returns false for obj1 and obj3, because they have different property values.

## Functional Components:
In functional components we can use the concept of pure components using the React.Memo() Higher Order Component(HOC).
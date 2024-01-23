export function helloWorld(name: string = 'world'): string {
  return `Hello ${name}!`;
}

console.log(helloWorld());

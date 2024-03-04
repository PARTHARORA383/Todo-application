import React from "react";

export function DeleteTodo(id) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id,
          // title: prop1,
          // description: prop2
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <>
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
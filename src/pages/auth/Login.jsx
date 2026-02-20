import React, { useState } from 'react';

function Login() {
  return (
    // 2. Create the form structure
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={email}

        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

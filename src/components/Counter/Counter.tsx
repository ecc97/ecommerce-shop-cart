'use client'
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment } from '@/redux/features/counter/counterSlice';

const CounterComponent = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.counter.counter); 
  console.log(counter)

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterComponent;

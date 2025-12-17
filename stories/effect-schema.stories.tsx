import React from 'react';
import { Schema } from 'effect';

import {
  Inspector,
  ObjectInspector,
  ObjectRootLabel,
  ObjectLabel,
  ObjectName,
  ObjectValue,
  ObjectPreview,
  withSchemaSupport,
  SchemaProvider,
} from '../src';

export default {
  title: 'Effect Schema',
  component: Inspector,
};

/** Create a schema-aware version of ObjectInspector using the HOC */
const SchemaObjectInspector = withSchemaSupport(ObjectInspector, {
  ObjectRootLabel,
  ObjectLabel,
  ObjectName,
  ObjectValue,
  ObjectPreview,
});

/** User schema with title annotation */
const UserSchema = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  email: Schema.String,
  createdAt: Schema.DateFromSelf,
}).annotations({
  identifier: 'User',
  title: 'User',
});

type User = typeof UserSchema.Type;

const sampleUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date('2024-01-15'),
};

export const BasicSchemaWithTitle = {
  render: () => <SchemaObjectInspector data={sampleUser} schema={UserSchema} expandLevel={1} />,
  name: 'Schema with title annotation',
};

/** Product schema with pretty print annotation */
const PriceSchema = Schema.Number.annotations({
  identifier: 'Price',
  pretty: (value) => `$${(value as number).toFixed(2)}`,
});

const ProductSchema = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  price: PriceSchema,
  quantity: Schema.Number,
}).annotations({
  identifier: 'Product',
  title: 'Product',
});

type Product = typeof ProductSchema.Type;

const sampleProduct: Product = {
  id: 42,
  name: 'Widget Pro',
  price: 29.99,
  quantity: 100,
};

export const SchemaWithPrettyPrint = {
  render: () => <SchemaObjectInspector data={sampleProduct} schema={ProductSchema} expandLevel={1} />,
  name: 'Schema with pretty print annotation',
};

/** Address schema for nested structures */
const AddressSchema = Schema.Struct({
  street: Schema.String,
  city: Schema.String,
  country: Schema.String,
  zip: Schema.String,
}).annotations({
  identifier: 'Address',
  title: 'Address',
});

/** Person schema with nested address */
const PersonSchema = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  address: AddressSchema,
}).annotations({
  identifier: 'Person',
  title: 'Person',
});

type Person = typeof PersonSchema.Type;

const samplePerson: Person = {
  id: 1,
  name: 'Jane Smith',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    country: 'USA',
    zip: '94102',
  },
};

export const NestedSchemaWithAnnotations = {
  render: () => <SchemaObjectInspector data={samplePerson} schema={PersonSchema} expandLevel={2} />,
  name: 'Nested schema with annotations',
};

/** Temperature schema with pretty print for formatting */
const TemperatureSchema = Schema.Number.annotations({
  identifier: 'Temperature',
  pretty: (value) => `${value}°C`,
});

/** Weather report schema */
const WeatherReportSchema = Schema.Struct({
  location: Schema.String,
  temperature: TemperatureSchema,
  humidity: Schema.Number.annotations({
    pretty: (value) => `${value}%`,
  }),
  conditions: Schema.String,
}).annotations({
  identifier: 'WeatherReport',
  title: 'Weather Report',
});

type WeatherReport = typeof WeatherReportSchema.Type;

const sampleWeather: WeatherReport = {
  location: 'New York',
  temperature: 22,
  humidity: 65,
  conditions: 'Partly Cloudy',
};

export const PrettyPrintForMultipleFields = {
  render: () => <SchemaObjectInspector data={sampleWeather} schema={WeatherReportSchema} expandLevel={1} />,
  name: 'Pretty print for multiple fields',
};

/** Array of users example */
const UsersArraySchema = Schema.Array(UserSchema).annotations({
  identifier: 'Users',
  title: 'Users',
});

const sampleUsers: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', createdAt: new Date('2024-01-01') },
  { id: 2, name: 'Bob', email: 'bob@example.com', createdAt: new Date('2024-02-15') },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', createdAt: new Date('2024-03-20') },
];

export const ArrayOfSchemaItems = {
  render: () => <SchemaObjectInspector data={sampleUsers} schema={UsersArraySchema} expandLevel={2} />,
  name: 'Array of schema items',
};

/** Example without schema for comparison */
export const WithoutSchema = {
  render: () => <ObjectInspector data={sampleUser} expandLevel={1} />,
  name: 'Without schema (for comparison)',
};

/** Order schema with complex formatting */
const MoneySchema = Schema.Number.annotations({
  identifier: 'Money',
  pretty: (value) => {
    const num = value as number;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  },
});

const OrderItemSchema = Schema.Struct({
  productId: Schema.Number,
  name: Schema.String,
  price: MoneySchema,
  quantity: Schema.Number,
}).annotations({
  identifier: 'OrderItem',
  title: 'Order Item',
});

const OrderSchema = Schema.Struct({
  orderId: Schema.String,
  customer: Schema.String,
  items: Schema.Array(OrderItemSchema),
  subtotal: MoneySchema,
  tax: MoneySchema,
  total: MoneySchema,
  status: Schema.String,
}).annotations({
  identifier: 'Order',
  title: 'Order',
});

type Order = typeof OrderSchema.Type;

const sampleOrder: Order = {
  orderId: 'ORD-2024-001',
  customer: 'John Doe',
  items: [
    { productId: 1, name: 'Widget Pro', price: 29.99, quantity: 2 },
    { productId: 2, name: 'Gadget Plus', price: 49.99, quantity: 1 },
  ],
  subtotal: 109.97,
  tax: 9.9,
  total: 119.87,
  status: 'Shipped',
};

export const ComplexOrderExample = {
  render: () => <SchemaObjectInspector data={sampleOrder} schema={OrderSchema} expandLevel={3} />,
  name: 'Complex order with currency formatting',
};

/** Enum-like union type example */
const StatusSchema = Schema.Union(
  Schema.Literal('pending'),
  Schema.Literal('processing'),
  Schema.Literal('completed'),
  Schema.Literal('cancelled')
).annotations({
  identifier: 'OrderStatus',
  title: 'Order Status',
});

const TaskSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
  status: StatusSchema,
  priority: Schema.Number.annotations({
    pretty: (value) => {
      const num = value as number;
      if (num >= 8) return 'High';
      if (num >= 4) return 'Medium';
      return 'Low';
    },
  }),
}).annotations({
  identifier: 'Task',
  title: 'Task',
});

type Task = typeof TaskSchema.Type;

const sampleTask: Task = {
  id: 1,
  title: 'Implement Effect Schema support',
  status: 'completed',
  priority: 9,
};

export const TaskWithPriorityFormatting = {
  render: () => <SchemaObjectInspector data={sampleTask} schema={TaskSchema} expandLevel={1} />,
  name: 'Task with priority formatting',
};

/** Using top-level pretty print for an entire object */
const PointSchema = Schema.Struct({
  x: Schema.Number,
  y: Schema.Number,
}).annotations({
  identifier: 'Point',
  title: 'Point',
  pretty: (value) => {
    const point = value as { x: number; y: number };
    return `(${point.x}, ${point.y})`;
  },
});

type Point = typeof PointSchema.Type;

const samplePoint: Point = { x: 10, y: 20 };

export const ObjectWithTopLevelPrettyPrint = {
  render: () => <SchemaObjectInspector data={samplePoint} schema={PointSchema} />,
  name: 'Object with top-level pretty print',
};

/** Comparison: same data with and without schema */
export const ComparisonWithAndWithoutSchema = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>With Schema</h4>
        <SchemaObjectInspector data={sampleOrder} schema={OrderSchema} expandLevel={2} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Without Schema</h4>
        <ObjectInspector data={sampleOrder} expandLevel={2} />
      </div>
    </div>
  ),
  name: 'Comparison: with and without schema',
};

/** Example using SchemaProvider directly for more control */
export const UsingSchemaProviderDirectly = {
  render: () => (
    <SchemaProvider schema={UserSchema}>
      <ObjectInspector data={sampleUser} expandLevel={1} />
    </SchemaProvider>
  ),
  name: 'Using SchemaProvider directly',
};

/**
 * Demonstrates expanded vs collapsed behavior:
 * - Collapsed: Shows full inline preview "Order {orderId: "ORD-2024-001", customer: "John Doe", ...}"
 * - Expanded: Shows only the type identifier "Order" since children are visible below
 */
export const ExpandedVsCollapsedPreview = {
  render: () => (
    <div style={{ display: 'flex', gap: '60px' }}>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Collapsed (expandLevel=0)</h4>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          Shows full preview: <code>Order {'{'} orderId: "...", customer: "...", ... {'}'}</code>
        </p>
        <SchemaObjectInspector data={sampleOrder} schema={OrderSchema} expandLevel={0} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px' }}>Expanded (expandLevel=1)</h4>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
          Shows only identifier: <code>Order</code> (children visible below)
        </p>
        <SchemaObjectInspector data={sampleOrder} schema={OrderSchema} expandLevel={1} />
      </div>
    </div>
  ),
  name: 'Expanded vs collapsed preview',
};

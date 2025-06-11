-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);

-- Add RLS policies
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy for inserting new emails (public can insert)
CREATE POLICY insert_policy ON waitlist 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

-- Policy for selecting emails (only authenticated users can view)
CREATE POLICY select_policy ON waitlist 
  FOR SELECT 
  TO authenticated
  USING (true);

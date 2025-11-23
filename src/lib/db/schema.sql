-- Table for tracking purchased gifts
CREATE TABLE IF NOT EXISTS purchases (
  id SERIAL PRIMARY KEY,
  gift_id VARCHAR(255) UNIQUE NOT NULL,
  purchased BOOLEAN NOT NULL DEFAULT true,
  purchased_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  purchased_by VARCHAR(255)
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_gift_id ON purchases(gift_id);
CREATE INDEX IF NOT EXISTS idx_purchased_at ON purchases(purchased_at);


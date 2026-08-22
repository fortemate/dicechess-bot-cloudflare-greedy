declare module '@fortemate/dicechess-engine' {
  export interface EngineMove {
    from: string;
    to: string;
    promotion?: string | null;
  }
  export interface BestMoveResult {
    moves: EngineMove[];
  }
  export interface BestMoveOptions {
    algorithm: string;
    timeBudgetMs?: number;
    clock?: { remainingMs: number; incrementMs: number };
  }
  export function getBestMove(dfen: string, options: BestMoveOptions): BestMoveResult | null;
  export function getLegalUciMoves(dfen: string): string[];
  export function getAvailableBots(): Array<{ id: string; name: string }>;
  export function registerOpeningBookBot(
    bookJson: string,
    baseAlgorithm: string,
    id: string,
    name: string,
  ): boolean;
}

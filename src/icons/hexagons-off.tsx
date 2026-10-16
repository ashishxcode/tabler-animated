"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18v-5l4 -2l4 2v5l-4 2l-4 -2"}],["path",{"d":"M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5"}],["path",{"d":"M12 13l.661 -.331"}],["path",{"d":"M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const HexagonsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HexagonsOffIcon.displayName = "HexagonsOffIcon";

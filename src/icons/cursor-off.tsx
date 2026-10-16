"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3"}],["path",{"d":"M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,12],[13.5,12]]}];

export const CursorOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CursorOffIcon.displayName = "CursorOffIcon";

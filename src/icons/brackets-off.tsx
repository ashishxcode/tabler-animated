"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5v15h3"}],["path",{"d":"M16 4h3v11m0 4v1h-3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"nudge","n":[0],"o":[6.5,12.5],"d":[-1.8,0]},{"fx":"nudge","n":[1],"o":[17.5,12],"d":[1.8,0]}];

export const BracketsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsOffIcon.displayName = "BracketsOffIcon";

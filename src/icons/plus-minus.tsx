"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7h6"}],["path",{"d":"M7 4v6"}],["path",{"d":"M20 18h-6"}],["path",{"d":"M5 19l14 -14"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[17,18],"dl":0.2,"st":0.08},{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,7],[7,7]]}];

export const PlusMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlusMinusIcon.displayName = "PlusMinusIcon";

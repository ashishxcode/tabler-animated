"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M13 17h-7v-14h-2"}],["path",{"d":"M6 5l14 1l-1 7h-13"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ShoppingCartXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartXIcon.displayName = "ShoppingCartXIcon";

"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M15 17h-9v-14h-2"}],["path",{"d":"M6 5l14 1l-.854 5.976m-2.646 1.024h-10.5"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"slide","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ShoppingCartExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartExclamationIcon.displayName = "ShoppingCartExclamationIcon";

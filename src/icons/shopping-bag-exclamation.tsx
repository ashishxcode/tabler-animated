"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 21h-6.426a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.258 1.678"}],["path",{"d":"M9 11v-5a3 3 0 0 1 6 0v5"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0,1],"o":[12,4],"a":-8}];

export const ShoppingBagExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingBagExclamationIcon.displayName = "ShoppingBagExclamationIcon";

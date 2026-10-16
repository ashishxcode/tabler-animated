"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11 17h-5v-14h-2"}],["path",{"d":"M6 5l14 1l-.718 5.023m-6.282 1.977h-7"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2],"o":[12,12]}];

export const ShoppingCartSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartSearchIcon.displayName = "ShoppingCartSearchIcon";

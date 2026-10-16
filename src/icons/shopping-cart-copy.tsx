"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11.5 17h-5.5v-14h-2"}],["path",{"d":"M6 5l14 1l-1 7h-13"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3],"o":[12.5,12],"d":[2.4,0]}];

export const ShoppingCartCopyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartCopyIcon.displayName = "ShoppingCartCopyIcon";

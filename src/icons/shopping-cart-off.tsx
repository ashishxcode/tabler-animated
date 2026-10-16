"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 17a2 2 0 1 0 2 2"}],["path",{"d":"M17 17h-11v-11"}],["path",{"d":"M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[17,19],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2,3],"o":[12,13.12],"d":[2.4,0]}];

export const ShoppingCartOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShoppingCartOffIcon.displayName = "ShoppingCartOffIcon";

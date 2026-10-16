"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-16"}],["path",{"d":"M9 3v18"}],["path",{"d":"M15 3v18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12,12],"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const Columns3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Columns3Icon.displayName = "Columns3Icon";

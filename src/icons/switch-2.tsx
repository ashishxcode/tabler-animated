"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6"}],["path",{"d":"M18 4l3 3l-3 3"}],["path",{"d":"M3 7h5l7 10h6"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,10.5],"d":[-2.2,0]},{"fx":"nudge","n":[3],"o":[19.5,17],"d":[2.2,0]}];

export const Switch2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Switch2Icon.displayName = "Switch2Icon";

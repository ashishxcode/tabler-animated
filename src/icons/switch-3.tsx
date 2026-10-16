"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397"}],["path",{"d":"M18 4l3 3l-3 3"}],["path",{"d":"M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,10.5],"d":[-2.2,0]},{"fx":"nudge","n":[3],"o":[19.5,17],"d":[2.2,0]}];

export const Switch3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Switch3Icon.displayName = "Switch3Icon";

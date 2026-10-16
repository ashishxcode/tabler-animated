"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.483 15.006a9 9 0 1 0 -7.958 5.978"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h16.8"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.94 16.94 0 0 1 2.307 12"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"draw","n":[1,2,3,4],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldMinusIcon.displayName = "WorldMinusIcon";

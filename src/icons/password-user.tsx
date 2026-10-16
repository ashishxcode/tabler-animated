"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 17v4"}],["path",{"d":"M10 20l4 -2"}],["path",{"d":"M10 18l4 2"}],["path",{"d":"M5 17v4"}],["path",{"d":"M3 20l4 -2"}],["path",{"d":"M3 18l4 2"}],["path",{"d":"M19 17v4"}],["path",{"d":"M17 20l4 -2"}],["path",{"d":"M17 18l4 2"}],["path",{"d":"M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[9,10],"o":[12,8.5],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19],[12,19],[12,19],[5,19],[5,19],[5,19],[19,19],[19,19],[19,19]]}];

export const PasswordUserIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PasswordUserIcon.displayName = "PasswordUserIcon";

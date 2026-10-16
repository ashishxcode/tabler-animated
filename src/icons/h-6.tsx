"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4"}],["path",{"d":"M21 12a2 2 0 1 0 -4 0v4"}],["path",{"d":"M4 6v12"}],["path",{"d":"M12 6v12"}],["path",{"d":"M11 18h2"}],["path",{"d":"M3 18h2"}],["path",{"d":"M4 12h8"}],["path",{"d":"M3 6h2"}],["path",{"d":"M11 6h2"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,6],"o":[12.5,13],"st":0.07},{"fx":"pop","n":[2,3],"o":[8,12],"a":0.04}];

export const H6Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
H6Icon.displayName = "H6Icon";

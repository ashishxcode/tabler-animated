"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 0 -9 9"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h7.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.984 16.984 0 0 1 2.574 8.62"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2,3,4],"o":[12,12]}];

export const WorldSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldSearchIcon.displayName = "WorldSearchIcon";

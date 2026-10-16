"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.94 13.045a9 9 0 1 0 -8.953 7.955"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h9.4"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.991 16.991 0 0 1 2.529 10.294"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"draw","n":[1,2,3,4],"o":[12,12],"dl":0.1,"st":0.1}];

export const WorldShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldShareIcon.displayName = "WorldShareIcon";

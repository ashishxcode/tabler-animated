"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 9a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M12 14v7"}],["path",{"d":"M7 18h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,17.5],[12,18]]}];

export const GenderFemmeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderFemmeIcon.displayName = "GenderFemmeIcon";

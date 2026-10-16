"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5"}],["path",{"d":"M17 7.875l3 -1.687"}],["path",{"d":"M17 7.875v3.375"}],["path",{"d":"M17 7.875l-3 -1.687"}],["path",{"d":"M17 7.875l3 1.688"}],["path",{"d":"M17 4.5v3.375"}],["path",{"d":"M17 7.875l-3 1.688"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[6.5,17.5],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,7.03],[17,9.56],[15.5,7.03],[18.5,8.72],[17,6.19],[15.5,8.72]]}];

export const RegexIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RegexIcon.displayName = "RegexIcon";

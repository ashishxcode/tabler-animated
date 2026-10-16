"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56a6.97 6.97 0 0 0 1.699 4.571c1.914 -.684 3.691 -2.183 5.301 -4.565c-1.613 -2.384 -3.394 -3.883 -5.312 -4.565"}],["path",{"d":"M2 9.504a40.73 40.73 0 0 0 2.422 2.504a39.679 39.679 0 0 0 -2.422 2.498"}],["path",{"d":"M18 11v.01"}],["path",{"d":"M4.422 12h10.578"}],["path",{"d":"M7 10v4"}],["path",{"d":"M11 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[13.21,12.01],"a":0.06},{"fx":"pop","n":[1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.21,12],[18,11.01],[7,12],[11,12]]}];

export const FishBoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FishBoneIcon.displayName = "FishBoneIcon";
